import "./about.css";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <div className="mt-10 max-w-3xl bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-sky-500 mb-4">
                    Sobre a Tech Store
                </h1>
                <p className="text-gray-700 text-lg mb-4">
                    A <strong>Tech Store</strong> é uma loja online dedicada a
                    oferecer os melhores produtos tecnológicos para você. Nosso
                    catálogo conta com uma ampla variedade de itens, desde
                    periféricos e acessórios até os dispositivos mais modernos
                    do mercado.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Nosso objetivo é proporcionar uma experiência de compra
                    prática e segura, garantindo qualidade e um atendimento
                    diferenciado. Aqui, você encontra inovação, preços justos e
                    um serviço de excelência.
                </p>
                <p className="text-gray-700 text-lg">
                    Estamos sempre em busca das melhores novidades para atender
                    às suas necessidades. Obrigado por escolher a Tech Store!
                </p>
            </div>
        </div>
    );
}
