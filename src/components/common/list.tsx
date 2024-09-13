import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { type ListItem } from '@/types/basic';

interface ListProps {
  data: ListItem[];
  title: string;
  subtitle?: string;
  limit?: number;
  all?: string;
}

const List: React.FC<ListProps> = ({ data, title, subtitle, limit, all }) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className='mb-6 p-2'>
      {limit ? (
        <div className='mb-2 flex justify-between'>
          <h3 className='font-bold'>{title}</h3>
          <Link href={all ?? '#'}>
            <p className='text-blue-600'>View all</p>
          </Link>
        </div>
      ) : (
        <div className='mb-6 rounded-lg bg-white p-4 shadow-sm'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
            <p className='text-gray-600'>{subtitle}</p>
          </div>
        </div>
      )}

      <div className='rounded-lg bg-white shadow-md'>
        {limitedData.map((item, index) => (
          <Link href={item.link ?? '#'} key={index} passHref>
            <div className='flex cursor-pointer items-center justify-between border-b p-4 font-bold text-nhs-blue'>
              <span>{item.title}</span>
              <FontAwesomeIcon icon={faChevronRight} className='h-6 w-6' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
