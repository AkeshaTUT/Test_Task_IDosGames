import UserDetailClient from '@/components/UserDetailClient';

export async function generateStaticParams() {
  // TODO: Заменить на реальные id пользователей из БД
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

interface UserPageProps {
  params: { id: string };
}

export default function Page({ params }: UserPageProps) {
  return <UserDetailClient id={params.id} />;
} 