import React, { useState } from 'react';
import { XCircle } from 'react-feather';
import {
    GeneroContainer,
    GeneroName
} from './GeneroItemElements'

const GeneroItem = ({ genre }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <GeneroContainer
            onClick={() => setIsOpen(!isOpen)}
            style={{
                backgroundColor: isOpen ? '#D18000' : '#FFF',
            }}

        >
            <GeneroName style={{ color: isOpen ? '#FFF' : '#000' }}>
                {genre.name} {isOpen && <XCircle size="18" style={{ color: '#FFF', margin: '0px 5px' }} />}
            </GeneroName>
        </GeneroContainer>
    )
};

export default GeneroItem;
