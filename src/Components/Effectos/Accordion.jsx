// En el componente Accordion.jsx
import { useRef } from 'react';
import PropTypes from 'prop-types';

function Accordion({ title, children, isOpen, onToggle }) {
    const contentRef = useRef(null);

    return (
        <div className="mb-2">
            <button
                className="w-full flex justify-between uppercase items-center text-white font-poppins text-left mb-2"
                onClick={onToggle}
            >
                <span>{title}</span>
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                    transition: 'max-height 0.3s ease-in-out',
                }}
                className="overflow-hidden pl-4 pr-4 absolute -translate-x-24 bg-zinc-900 rounded-md "
            >
                <div className="normal-case">{children}</div>
            </div>
        </div>
    );
}

Accordion.propTypes = {
    title: PropTypes.node.isRequired, // Cambiar a PropTypes.node
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default Accordion;
