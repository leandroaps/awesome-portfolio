import HelloContent from '../atoms/HelloContent';
import HelloTitle from '../atoms/HelloTitle';
import ColSixTabFullLeft from '../templates/ColSixTabFullLeft';

function Hello() {
    return (
        <ColSixTabFullLeft>
            <HelloTitle />
            <HelloContent />
        </ColSixTabFullLeft>
    );
}

export default Hello;
