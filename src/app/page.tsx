import Image from "next/image";
import Logo from "public/logo.webp"
import LogoM from "public/logo-mob.webp"
import Rtg from "public/logo-rtg.webp"
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="pt-11 pb-16 bg-[#FCFCFC]">
        <Image className="w-fit mx-auto lg:block hidden" src={Logo} alt="logo" />
        <Image className="w-fit mx-auto lg:hidden" src={LogoM} alt="logo" />
        <div className="mx-auto lg:max-w-[76rem] max-w-[21.4rem] w-full lg:mt-[5.5rem] mt-[3rem]">
          <h1 className={`${sora.className} lg:text-[3rem] text-[2rem] text-[#04C8B6] font-bold lg:leading-[4rem] leading-[3rem] lg:text-left text-center`}>
            Política de Privacidade
          </h1>
          <h2 className={`${sora.className} lg:text-[1.5rem] text-[.875rem] lg:font-medium font-semibold lg:leading-8 leading-6 lg:text-left text-center text-[#D7D6D6] mt-2`}>
            Atualizado em: Junho de 2024
          </h2>

          <div className="leading-7 mt-12 flex flex-col lg:gap-6 gap-5 lg:text-[1rem] text-[.875rem]">

            <p>
              Sua privacidade é importante para a {" "} <strong>READY TO GO EDUCATION MENTORIAS E PRODUTOS DIGITAIS LTDA (READY TO GO)</strong>, portanto, sendo você usuário, por favor reserve um tempo para conhecer nossas práticas e, se tiver alguma dúvida, consulte esta página ou os Termos de Uso.
            </p>

            <p>
              Ao visitar e usufruir deste site, você automaticamente aceita as condições descritas a seguir, que compõem a Política de Privacidade.
            </p>

            <p>
              A {" "} <strong>READY TO GO </strong>respeita a sua privacidade. Quando se conectam a nós, queremos que nossos pretensos alunos saibam que seus dados pessoais estão em segurança. Assim como nós nos dedicamos em levar-lhes uma experiência virtual fácil e segura.
            </p>

            <p>
              As informações pessoais armazenadas pelo nosso site nos ajudam a compreender melhor os interesses de nossos pretensos clientes, sendo que o nosso esforço em atender com o melhor serviço possível nunca cessa.
            </p>

            <p>
              Caso fique ainda alguma dúvida entre em contato através de nosso canal próprio para contato: <a className="underline text-[#04C8B6]" href="mailto:suporte@vendatodosantodia.com.br">suporte@vendatodosantodia.com.br</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="text-[#666] lg:leading-7 leading-6 bg-[#f2f2f2] lg:pt-16 pt-8 lg:pb-32 pb-16">
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-16 justify-between lg:max-w-[76rem] max-w-[21.4rem] mx-auto">

          <div className="lg:max-w-[43.75rem] max-w-[21.4rem] w-full flex flex-col lg:gap-12 gap-8 lg:text-[1rem] text-[.875rem]">
            <h2 className={`${sora.className} lg:hidden uppercase font-bold leading-7 text-center`}>Política de Privacidade do VTSD</h2>
            <div className="termos" id="1">
              <h3>
                1. Dos dados pessoais
              </h3>
              <p>
                Primeiramente é importante informar o que é considerado dado pessoal segundo a Lei Geral de Proteção de Dados, sendo eles informações relacionadas a uma pessoa natural identificada ou identificável. Isso inclui qualquer informação que, sozinha ou em combinação com outras informações disponíveis, possa identificar uma pessoa. Exemplos comuns de dados pessoais incluem nome, endereço, número de telefone, endereço de e-mail, CPF, entre outros.
              </p>
              <p>
                Você não é obrigado a conceder informações ao nosso site, entretanto, sem conceder quando forem solicitadas, não lhe será permitido o acesso às funcionalidades nele constante, como, por exemplo, aderir a oferta do curso, {" "} <strong>“VENDA TODO SANTO DIA"</strong>, nos moldes do art. 7º e 8º da LGPD.
              </p>
            </div>
            <div className="termos" id="2">
              <h3>
                2. Dos dados pessoais coletados:
              </h3>
              <p>
                A <strong>READY TO GO</strong> {" "} coletará os seguintes dados de identificação pessoal:
              </p>
              <p>
                1. nome, <br />
                2. e-mail, <br />
                3. número de telefone.
              </p>
              <p>
                A <strong>READY TO GO</strong> {" "} irá utilizar essas informações para fins de disponibilização de acesso à página de checkout de oferta e a plataforma.
              </p>
              <p>
                Tais dados poderão ser armazenados. Dessa maneira, de acordo com o art. 7º, inciso VIII da Lei 12.965/2014 (Marco Civil da Internet), poderemos enviar mensagens.
              </p>
            </div>
            <div className="termos" id="3">
              <h3>
                3. Da disponibilização de dados pessoais:
              </h3>
              <p>
                A <strong>READY TO GO</strong> {" "} irá disponibilizar suas informações pessoais, sem aviso prévio, somente em caso de:
              </p>
              <p>
                1. legislação, regulamentação, processo legal ou solicitação governamental aplicável;  <br />
                2. cumprir investigação de possíveis violações; <br />
                3. fraude ou por segurança; ou <br />
                4. proteger contra danos aos direitos, a propriedade ou a segurança da READY TO GO, nossos usuários ou o público, conforme solicitado ou permitido por lei.
              </p>
              <p>
                A <strong>READY TO GO</strong> {" "} efetuará o cadastro do aluno, mantendo em seu sistema os registros específicos das transações efetuadas, pelo prazo contratual ou enquanto perdurar o interesse legítimo da empresa
              </p>
              <p>
                Todos os documentos e informações relacionados ao cadastro da titular permanecerão em segurança na posse da {" "} <strong>READY TO GO</strong>.
              </p>
            </div>
            <div className="termos" id="4">
              <h3>
                4. Do compartilhamento dos dados pessoais com terceiros:
              </h3>
              <p>
                Compartilhamos informações referentes a dados pessoais com nossos operadores de página e e-mail, com a finalidade de viabilizar o contato com o pretenso cliente através da página de acesso e e-mail.
              </p>
              <p>
                Todos os compartilhamentos seguem a máxima de segurança de dados em atenção à Lei 12.965/2014 e a 13.709/2018.
              </p>
            </div>
            <div className="termos" id="5">
              <h3>
                5. Da segurança:
              </h3>
              <p>
                Nós dispomos de medidas de segurança em âmbitos físico, eletrônico e administrativo, que protegem os dados pessoais e suas informações. Essas medidas de proteção nos auxiliam na prevenção de fraudes e acessos não autorizados às informações, bem como, na manutenção da integridade dos dados. Além disso, dispomos de uma Política de Segurança Interna para que funcionários da {" "} <strong>READY TO GO</strong> tenham apenas acesso a informações que forem necessárias para desenvolvimento de sua atividade, de modo que seus dados permaneçam sempre em segurança.
              </p>
            </div>
            <div className="termos" id="6">
              <h3>
                6. Das comunicações:
              </h3>
              <p>
                Todas as comunicações devem ser através do canal de e-mail: <br /> <a className="underline text-[#04C8B6]" href="mailto:suporte@vendatodosantodia.com.br">suporte@vendatodosantodia.com.br</a>.
              </p>
            </div>
            <div className="termos" id="7">
              <h3>
                7. Das mudanças na Política de Privacidade:
              </h3>
              <p>
                Em caso de modificação destes termos desta política de privacidade, para atender melhor nossos pretensos clientes, publicaremos tais alterações da política de privacidade e informaremos sobre esta situação. Também manteremos as versões anteriores desta Política de Privacidade arquivadas para você compará-las.
              </p>
            </div>
            <div className="termos" id="8">
              <h3>
                8. Dos prazos para armazenamento de dados pessoais:
              </h3>
              <p>
                Os dados manter-se-ão armazenados pelo período que respeite o legítimo interesse da {" "} <strong>READY TO GO</strong>, com fulcro na legislação vigente.
              </p>
              <p>
                Não excluindo aqueles exigidos através de:
              </p>
              <p>
                a. legislação, regulamentação, processo legal ou solicitação governamental aplicável; <br />
                b. os atendem o interesse legítimo da empresa; <br />
                c. cumprir investigação de possíveis violações; <br />
                d. fraude ou por segurança; ou <br />
                e. proteger contra danos aos direitos, a propriedade ou a segurança da {" "} <strong>READY TO GO</strong>, nossos clientes ou o público, conforme solicitado ou permitido por lei.
              </p>
            </div>
            <div className="termos" id="9">
              <h3>
                9. Do compartilhamento dos dados pessoais com a Hotmart:
              </h3>
              <p>
                1. Seus dados coletados serão compartilhados com a plataforma Hotmart, para que seja apresentada a oferta e hospedagem do "<strong>VENDA TODO SANTO DIA</strong>".
              </p>
              <p>
                2. Demais dados compartilhados pelo titular de dados pessoais é de responsabilidade deste.
              </p>
            </div>
            <div className="termos" id="10">
              <h3>
                10. Do encarregado de dados pessoais nos moldes da Lei Geral de Proteção de Dados Pessoais:
              </h3>
              <p>
                Durante o período de armazenamento pela <strong>READY TO GO</strong> {" "} haverá um responsável exclusivo pelos dados, nos termos do art. 41 da Lei de Proteção de Dados. Esta pessoa irá responder pelos dados, caso haja necessidade de apresentá-los para autoridade competente.
              </p>
              <p>
                Nome: <strong>READY TO GO EDUCATION MENTORIAS E PRODUTOS DIGITAIS LTDA</strong>  <br />
                CNPJ: 37.643.030/0001-26 <br />
                E-mail: <a className="underline text-[#04C8B6]" href="mailto:suporte@vendatodosantodia.com.br">suporte@vendatodosantodia.com.br</a>
              </p>
            </div>
          </div>

          <div className="lg:max-w-[26.3rem] max-w-[21.4rem] font-bold leading-7 flex flex-col gap-8 pt-8 lg:text-[1rem] text-[.875rem]">
            <a className="ml-[2.5rem]" href="#1">1. Dos dados pessoais</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#2">2. Dos dados pessoais coletados</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#3">3. Da disponibilização de dados pessoais</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#4">4. Do compartilhamento dos dados pessoais com terceiros</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#5">5. Da segurança</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#6">6. Das comunicações</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#7">7. Das mudanças na política de privacidade</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#8">8. Dos prazos para armazenamento dos dados pessoais</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#9">9. Do compartilhamento dos dados pessoais com a Hotmart</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
            <a className="ml-[2.5rem]" href="#10">10. Do encarregado de dados segundo a Lei Geral de Proteção de Dados (LGPD)</a>
            <div className="bg-[#D7D6D6] w-full h-[.125rem]" ></div>
          </div>

        </div>
      </section>

      <section className="bg-[#e9e9e9] lg:pt-[5.5rem] pt-12 lg:pb-32 pb-[1.56rem]">
        <div className="flex lg:flex-row flex-col-reverse justify-between max-w-[76rem] mx-auto">
          <div className="max-w-[25.75rem] mx-auto">
            <Image className="lg:block hidden" src={Logo} alt="" loading='lazy' />
            <p className="lg:max-w-[19.1875rem] max-w-[21.4375rem] mx-auto lg:text-left text-center text-[0.625rem] text-[#292929] mt-12">
              Aviso Legal: &quot;Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico.&quot;
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:gap-10 gap-6 w-fit mx-auto lg:mt-auto mt-12">
            <div className="flex gap-10 lg:gap-12">
              <div>
                <p className="text-[#363636] lg:text-[1.125rem] text-[1rem] font-semibold">Navegação</p>
                <div className="flex flex-col gap-3 lg:mt-[1.56rem] mt-2 text-[#666] lg:text-[0.75rem] text-[0.625rem] font-medium">
                  <a href="https://www.vendatodosantodia.com.br/pv0622/b/#aula">
                    <p>Aula Gratuita</p>
                  </a>
                  <a href="https://www.vendatodosantodia.com.br/pv0622/b/#sobre">
                    <p>Sobre o Método</p>
                  </a>
                  <a href="https://www.vendatodosantodia.com.br/pv0622/b/#resultados">
                    <p>Resultados dos Alunos</p>
                  </a>
                  <a href="https://www.vendatodosantodia.com.br/pv0622/b/#faq">
                    <p>Perguntas Frequentes</p>
                  </a>
                </div>
              </div>
              <div >
                <p className="text-[#363636] lg:text-[1.125rem] text-[1rem] font-semibold">Suporte</p>
                <div className="flex flex-col gap-3 lg:mt-[1.56rem] mt-2 text-[#666] lg:text-[0.75rem] text-[0.625rem] font-medium">
                  <p >Suporte Técnico</p>
                  <p>Cobranças e Finanças</p>
                  <p>Tirar Dúvidas via Whatsapp</p>
                </div>
              </div>
            </div>
            <div >
              <p className="text-[#363636] lg:text-[1.125rem] text-[1rem] font-semibold">Políticas</p>
              <div className="flex flex-col gap-3 lg:mt-[1.56rem] mt-2 text-[#666] lg:text-[0.75rem] text-[0.625rem] font-medium">
                <p >Política de Privacidade</p>
                <p>Política de Vendas</p>
                <p>Política de Reembolso</p>
              </div>
            </div>
          </div>
          <Image className="block lg:hidden w-fit mx-auto" src={Logo} alt="" loading='lazy' />
        </div>
      </section>

      <footer className="bg-[#D7D6D6] w-full py-8 ">
        <div className="flex lg:flex-row flex-col lg:justify-around items-center lg:gap-0 gap-4 justify-between lg:text-[.75rem] text-[0.625rem] text-[#363636] font-semibold">
          <p>
            Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
          </p>
          <div className="flex lg:gap-4 gap-2 lg:items-center items-end lg:font-normal font-bold lg:text-[1rem] text-[0.875rem]">
            <p>
              Designed by
            </p>
            <Image src={Rtg} alt="" loading='lazy' />

          </div>
        </div>
      </footer>
    </main>
  );
}
