import RoleDetailClient from '@/components/RoleDetailClient';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <RoleDetailClient id={params.id} />;
} 