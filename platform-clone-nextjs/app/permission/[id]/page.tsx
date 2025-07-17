import PermissionDetailClient from '@/components/PermissionDetailClient';

export async function generateStaticParams() {
  // TODO: Заменить на реальные id permissions из БД
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

interface PermissionPageProps {
  params: { id: string };
}

export default function Page({ params }: PermissionPageProps) {
  return <PermissionDetailClient id={params.id} />;
} 