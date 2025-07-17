import PermissionDetailClient from '@/components/PermissionDetailClient';

export async function generateStaticParams() {
  // TODO: Заменить на реальные id permissions из БД
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }, // добавлен id 5
  ];
}

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <PermissionDetailClient id={params.id} />;
} 