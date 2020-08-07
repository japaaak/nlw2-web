import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  value: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ value }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: value.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={value.avatar} alt={value.name} />

        <div>
          <strong>{value.name}</strong>
          <span>{value.subject}</span>
        </div>
      </header>

      <p>{value.bio}</p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ {value.cost}</strong>
        </p>
        <a
          target="_blank"
          href={`https://wa.me/${value.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="whats app" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
