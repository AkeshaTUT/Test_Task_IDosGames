import RoleDetailClient from '@/components/RoleDetailClient';

export default function RoleDetailPage({ params }: { params: { id: string } }) {
  return <RoleDetailClient id={params.id} />;
} 