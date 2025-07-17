import RoleDetailClient from '@/components/RoleDetailClient';

export async function generateStaticParams() {
  // TODO: Заменить на реальные id ролей из БД
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

interface RolePageProps {
  params: { id: string };
}

export default function Page({ params }: RolePageProps) {
  return <RoleDetailClient id={params.id} />;
} 