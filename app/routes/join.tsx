import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 },
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 },
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
        },
      },
      { status: 400 },
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export const meta: MetaFunction = () => [{ title: "Sign Up" }];

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="text-4xl font-bold text-white">
            NoteFlow
          </Link>
          <p className="mt-2 text-gray-300">Create your account</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white"
              >
                Email address
              </label>
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your email"
              />
              {actionData?.errors?.email ? (
                <div className="pt-2 text-sm text-red-300" id="email-error">
                  {actionData.errors.email}
                </div>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-3 text-white placeholder-gray-300 backdrop-blur-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Create a password"
              />
              {actionData?.errors?.password ? (
                <div className="pt-2 text-sm text-red-300" id="password-error">
                  {actionData.errors.password}
                </div>
              ) : null}
            </div>

            <input type="hidden" name="redirectTo" value={redirectTo} />

            <button
              type="submit"
              className="w-full rounded-lg bg-white px-4 py-3 font-semibold text-indigo-900 shadow-lg transition-colors duration-200 hover:bg-gray-100"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link
                className="font-semibold text-white transition-colors duration-200 hover:text-gray-200"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Sign in
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
