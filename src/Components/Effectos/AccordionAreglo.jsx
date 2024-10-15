import { useState, useRef } from 'react';
import PropTypes from 'prop-types'; // Importando PropTypes
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export function AccordionAreglo({ title, children, link }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const navigate = useNavigate();

    return (
        <div className="mb-2 ">
            <button
                className="w-full flex justify-between uppercase items-center text-white font-poppins text-left mb-2"
                onClick={() => (setIsOpen(!isOpen), navigate(link))} // Navegando al link
            >
                <span>{title}</span>
                {children && <FiChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
                className="transition-max-height duration-200 ease-in-out overflow-hidden pl-4 pr-4"
            >
                <div className="normal-case">{children}</div>
            </div>
        </div>
    );
}

// Añadir PropTypes
AccordionAreglo.propTypes = {
    title: PropTypes.string.isRequired, // title debe ser una string y es requerida
    children: PropTypes.node, // children puede ser cualquier nodo de React (puede ser un string, componente, etc.)
    link: PropTypes.string.isRequired // link debe ser una string y es requerida
};
