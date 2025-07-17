import PermissionDetailClient from '@/components/PermissionDetailClient';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <PermissionDetailClient id={params.id} />;
} 