import { prisma } from "~/db.server";
import type { User } from "./user.server";

type Note = {
  id: string;
  title: string;
  body: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export function getNote({
  id,
  userId,
}: Pick<Note, "id"> & {
  userId: User["id"];
}) {
  return prisma.note.findFirst({
    select: { id: true, body: true, title: true },
    where: { id, userId },
  });
}

export function getNoteListItems({ userId }: { userId: User["id"] }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createNote({
  body,
  title,
  userId,
}: Pick<Note, "body" | "title"> & {
  userId: User["id"];
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function updateNote({
  id,
  body,
  title,
  userId,
}: Pick<Note, "body" | "title"> & {
  userId: User["id"];
} & { id: string }) {
  return prisma.note.update({
    where: { id, userId },
    data: { title, body },
  });
}

export function deleteNote({
  id,
  userId,
}: Pick<Note, "id"> & { userId: User["id"] }) {
  return prisma.note.delete({
    where: { id, userId },
  });
}
