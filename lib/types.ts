export type User = {
  createdAt: string;
  name: string;
  image: string;
  lastSeen: string;
  email: string;
  avatar: string;
  id: string;
};

export type Todo = {
  createdAt: string;
  title: string;
  isCompleted: string;
  id: string;
  userId: string;
};
