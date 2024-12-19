import Link from "next/link";
import { notFound } from "next/navigation";

import { getUsers } from "@/lib/users";
import { cn } from "@/lib/utils";

const UsersLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug?: string[] };
}) => {
  const { users, error } = await getUsers();
  if (!users || error) {
    notFound();
  }
  const { slug } = params;
  const userId = slug?.[0];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-2xl font-medium">All Users</h1>
        <div className="mt-6 flex overflow-hidden rounded-lg shadow">
          <ul className="flex flex-col gap-2 p-8 bg-gray-100 text-sm">
            {users.map((user) => (
              <li key={user.id}>
                <Link
                  href={`/users/${user.id}`}
                  className={cn(
                    user.id === userId &&
                      "underline decoration-sky-500 underline-offset-4"
                  )}
                >
                  {user.name}
                </Link>
              </li>
            ))}
          </ul>
          {children}
        </div>
      </div>
    </section>
  );
};

export default UsersLayout;
