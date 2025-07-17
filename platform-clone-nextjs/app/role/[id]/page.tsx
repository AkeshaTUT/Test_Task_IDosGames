import RoleDetailClient from '@/components/RoleDetailClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ];
}

type RolePageProps = {
  params: { id: string };
};

export default function Page({ params }: RolePageProps) {
  return <RoleDetailClient id={params.id} />;
} 