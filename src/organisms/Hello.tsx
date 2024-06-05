import HelloContent from '../atoms/HelloContent';
import Title from '../atoms/Title';
import ColSixTabFullLeft from '../templates/ColSixTabFullLeft';

function Hello() {
    return (
        <ColSixTabFullLeft>
            <Title level="h3" content="Howdy!" />
            <HelloContent />
        </ColSixTabFullLeft>
    );
}

export default Hello;
