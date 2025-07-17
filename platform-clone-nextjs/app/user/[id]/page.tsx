import UserDetailClient from '@/components/UserDetailClient';

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return <UserDetailClient id={params.id} />;
} 