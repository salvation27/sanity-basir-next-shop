import React from 'react'
import Link from 'next/link'
import TypographyEl from './elem/TypographyEl';

const EmptyCart = () => {
  return (
    <div className="empty_cart">
      <TypographyEl teg="h3" classN="span">
        <Link href={"/"} passHref>
          Вернуться на главную страницу
        </Link>
      </TypographyEl>
    </div>
  );
}

export default EmptyCart