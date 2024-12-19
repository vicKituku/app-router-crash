import { cn } from "@/lib/utils";
import Users from "@/components/users";
import User from "@/components/user";

import { getTodosByUserId, getUsers } from "@/lib/users";

export async function generateStaticParams() {
  const { users } = await getUsers();

  if (!users) {
    return [];
  }

  const slugs = [];

  for (const user of users) {
    const { todos } = await getTodosByUserId(user.id);
    if (!todos) {
      slugs.push([user.id]);
      continue;
    }
    for (const todo of todos) {
      slugs.push([user.id, "todos", todo.id]);
    }
  }

  const paths = slugs.map((slug) => slug);
  return paths;
}
const UsersPage = async ({ params }: { params: { slug?: string[] } }) => {
  const { slug } = params;

  if (!slug) {
    return <Users />;
  }
  return <User slug={slug} />;
};

export default UsersPage;
