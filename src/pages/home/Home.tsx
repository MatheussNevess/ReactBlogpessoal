import React, { useContext, useEffect } from 'react';
import homeLogo from '../../assets/home.png';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/ModalPostagem/ModalPostagem';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../util/toastAlerta';

function Home() {
  const { usuario } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!usuario.token) {
      toastAlerta('Você precisa estar logado para acessar a home!', 'info');
      navigate('/login');
    }
  }, [usuario.token, navigate]);

  return (
    <>
      <div className="bg-indigo-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
            <p className='text-xl'>Expresse aqui seus pensamentos e opiniões</p>
            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={homeLogo} alt="Home Logo" className='w-2/3' />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
