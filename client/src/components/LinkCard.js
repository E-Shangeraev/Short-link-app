import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Ссылка</h2>
      <p>
        <span>Ваша ссылка: </span>
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        <span>Откуда: </span>
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        <span>Количество кликов по ссылке: </span>
        <strong>{link.clicks}</strong>
      </p>
      <p>
        <span>Дата создания: </span>
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
