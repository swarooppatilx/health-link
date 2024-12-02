import Appointment from '@/components/services/appointment';

interface Props {
  params: {
    id: string;
  };
}

const HospitalPage = ({ params }: Props) => {
  const { id } = params;
  return <Appointment id={id} />;
};

export default HospitalPage;
