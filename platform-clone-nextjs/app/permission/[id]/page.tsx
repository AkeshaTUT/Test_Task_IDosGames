import PermissionDetailClient from '@/components/PermissionDetailClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

type PermissionPageProps = {
  params: { id: string };
};

export default function Page({ params }: PermissionPageProps) {
  return <PermissionDetailClient id={params.id} />;
} 