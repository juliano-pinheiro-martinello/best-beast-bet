// eslint-disable-next-line no-unused-vars
import React from 'react';

import Logo from '../../assets/lion.png';
// import Cover from '../../assets/cover.jpg';

export const Login = () => {
  return (
    <div className="bg-[#2E1B86] h-screen">
      <header className="container ma h-[5rem] flex items-center">
        <h1 className="text-amber">Login</h1>
      </header>
      <section className="container m-a h-3xl bg-white rounded">
        <div className="flex p8 gap-lg h-[90%]">
          {/* <div className="max-w-[50%]">
            <img src={Cover} alt="" />
          </div> */}
          <div className="w-full h-full flex  items-center flex-col">
            <div className="flex flex-col justify-center items-center p4 w-full">
              <img
                src={Logo}
                alt="imagem ilustrada de um leão"
                width={170}
                height={170}
              />
              <div className="text-center">
                <h2>Bem Vindo</h2>
                <p>Por favor, preencha os campos abaixo</p>
              </div>
            </div>
            <form
              action=""
              method="post"
              className="flex flex-col justify-center"
            >
              <div className="flex flex-col w-md">
                <label htmlFor="">Usuário</label>
                <input
                  id="username"
                  type="text"
                  className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
                />
              </div>
              <div className="flex flex-col w-md">
                <label htmlFor="">Senha</label>
                <input
                  id="password"
                  type="text"
                  className="h-[42px] rounded bg-light text-xl px-2 focus:outline-amber"
                />
              </div>
              <input
                type="submit"
                value="Entrar"
                className="bg-amber px-7 font-700 rounded h-[42px] mt-4 cursor-pointer"
              />
            </form>
            <p className="font-700 mt-4">ou</p>
            <button className="bg-amber px-7 font-700 rounded h-[42px] mt-4 cursor-pointer">
              Criar Conta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
