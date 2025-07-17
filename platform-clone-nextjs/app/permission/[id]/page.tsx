import PermissionDetailClient from '@/components/PermissionDetailClient';

export default function PermissionDetailPage({ params }: { params: { id: string } }) {
  return <PermissionDetailClient id={params.id} />;
} 