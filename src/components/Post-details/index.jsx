/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';

const PostDetails = () => {
  const [comentario, setComentario] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentarios, setComentarios] = useState([]);

  const handleComentarioChange = (event) => {
    setComentario(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoComentario = {
      comentario,
      nome,
      email,
    };

    const novosComentarios = [...comentarios, novoComentario];
    setComentarios(novosComentarios);

    setComentario('');
    setNome('');
    setEmail('');
  };
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>A vida na cidade: belezas escondidas.</h2>
                  <div className="info">
                    <p>
                      <Link href="#">Carlos Bento</Link>/
                      <Link href="#">27 de Junho , 2023</Link>/
                      <Link href="#">Reporter de viagens</Link>
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src="/assets/img/blog/img5.jpg"
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                            Em um mundo vasto e diversificado, repleto de
                            maravilhas naturais e criações humanas, a beleza
                            está presente em todos os cantos. Uma maneira
                            emocionante de apreciar essa beleza é através de
                            viagens, permitindo-nos descobrir a magia de
                            diferentes cidades e mergulhar na riqueza cultural
                            que cada uma oferece. Neste artigo, exploraremos a
                            conexão entre viagem, mundo, beleza e cidade,
                            destacando como essa combinação pode nos
                            proporcionar experiências inesquecíveis.
                          </p>
                        </div>
                        <p>
                          Viajar pelo mundo é como abrir um livro gigante cheio
                          de histórias e encantos. Cada cidade é uma página
                          desse livro, com sua própria arquitetura, paisagens,
                          tradições e peculiaridades. Ao embarcarmos em uma
                          viagem, nos abrimos para novas perspectivas e nos
                          permitimos enriquecer com a diversidade cultural e
                          geográfica que o mundo oferece.
                        </p>

                        <h6>- Descobrindo a Beleza do Mundo .</h6>

                        <p>
                          Viajar pelo mundo é como abrir um livro gigante cheio
                          de histórias e encantos. Cada cidade é uma página
                          desse livro, com sua própria arquitetura, paisagens,
                          tradições e peculiaridades. Ao embarcarmos em uma
                          viagem, nos abrimos para novas perspectivas e nos
                          permitimos enriquecer com a diversidade cultural e
                          geográfica que o mundo oferece.
                        </p>

                        <ul>
                          <li>
                            <span>01</span> A Beleza Cultural das Cidades
                          </li>
                          <li>
                            <span>02</span> A Beleza nas Pequenas Coisas
                          </li>
                          <li>
                            <span>03</span> Capacidade de desenvolver empatia e
                            compreensão.
                          </li>
                          <li>
                            <span>04</span> A Beleza de Viajar e Aprender
                          </li>
                        </ul>

                        <div className="quotes text-center">
                          <p>
                            Uma das maiores belezas de viajar é a oportunidade
                            de aprender e crescer como indivíduo. Cada cidade
                            nos apresenta novos desafios, experiências e
                            conhecimentos, expandindo nossa visão de mundo e nos
                            tornando cidadãos globais mais conscientes.
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/assets/img/blog/single.jpg" alt="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img src="/assets/img/blog/single.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                        <p>
                          A beleza de viajar e aprender está na capacidade de
                          expandir nossa visão de mundo, apreciar as pequenas
                          coisas e nutrir uma compreensão global que transcende
                          fronteiras. Portanto, que possamos continuar
                          explorando, aprendendo e celebrando a beleza deste
                          mundo vasto e fascinante.
                        </p>
                        <div className="share-info">
                          <div className="social">
                            <Link href="#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-behance"></i>
                            </Link>
                          </div>
                          <div className="tags">
                            <Link href="#">Viagem</Link>,
                            <Link href="#">Mundo</Link>,
                            <Link href="#">Vida</Link>
                          </div>
                        </div>
                      </div>
                      <div className="author">
                        <div className="author-img">
                          <img src="/assets/img/autor.jpg" alt="" />
                        </div>
                        <div className="info">
                          <h6>
                            <span>Autor :</span> Carlos Bento
                          </h6>
                          <p>
                            Ao vivenciar diferentes realidades e testemunhar as
                            dificuldades e as alegrias de outras comunidades,
                            somos lembrados da nossa interconectividade como
                            seres humanos.
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination">
                  <span>
                    <Link href="#">Matéria anterior</Link>
                  </span>
                  <span className="icon">
                    <Link href="#">
                      <i className="fas fa-th-large">+</i>
                    </Link>
                  </span>
                  <span className="text-right">
                    <Link href="#">Próxima matéria</Link>
                  </span>
                </div>

                <div className="comments-area">
                  <h5>Comentários :</h5>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/pessoa1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        João Silva<span> 27 Junho 2023</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          Responder<i className="fas fa-reply">↵</i>
                        </Link>
                      </span>
                      <p>
                        Ao vivenciar diferentes realidades e testemunhar as
                        dificuldades e as alegrias de outras comunidades, somos
                        lembrados da nossa interconectividade como seres
                        humanos.
                      </p>
                    </div>
                  </div>
                  <div className="item relped">
                    <div className="comment-img">
                      <img src="/assets/img/pessoa3.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Miguel Castro<span> 27 JUNHO 2023</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          Responder<i className="fas fa-reply">↵</i>
                        </Link>
                      </span>
                      <p>
                        Super concordo com Você João! Uma das maiores belezas de
                        viajar é a oportunidade de aprender e crescer como
                        indivíduo.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="comment-img">
                      <img src="/assets/img/pessoa2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <h6>
                        Maria Pinheiro<span> 27 JUNHO 2023</span>
                      </h6>
                      <span className="replay">
                        <Link href="#">
                          Responder<i className="fas fa-reply">↵</i>
                        </Link>
                      </span>
                      <p>
                        Cada cidade nos apresenta novos desafios, experiências e
                        conhecimentos, expandindo nossa visão de mundo e nos
                        tornando cidadãos globais mais conscientes.
                      </p>
                    </div>
                  </div>

                  {/* {comentarios.map((comentario, index) => (
                  <div key={index}>
                    <p>{comentario.comentario}</p>
                    <p>Por: {comentario.nome}</p>
                    <p>Email: {comentario.email}</p>
                    <hr />
                  </div>
                ))} */}

                  {comentarios.map((comentario, index) => (
                    <div key={index}>
                      {/* item relped */}
                      <div className="item">
                        <div className="comment-img">
                          <img src="/assets/img/imgcomentario.jpg" alt="" />
                        </div>
                        <div className="info">
                          <h6>
                            {comentario.nome}
                            <span> 27 JUNHO 2023</span>
                          </h6>
                          <span className="replay">
                            <Link href="#">
                              Responder<i className="fas fa-reply">↵</i>
                            </Link>
                          </span>
                          <p>{comentario.comentario}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="comment-form">
                  <h5>Deixe seu comentário :</h5>
                  <div className="form">
                    <form onSubmit={handleSubmit} action="">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              value={comentario}
                              onChange={handleComentarioChange}
                              placeholder="Seu comentário"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              value={nome}
                              onChange={handleNomeChange}
                              placeholder="Seu nome"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              value={email}
                              onChange={handleEmailChange}
                              placeholder="Seu e-mail"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn-curve btn-blc btn-lg"
                            >
                              <span>Enviar</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
