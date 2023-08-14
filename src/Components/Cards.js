import { useState, useRef } from 'react'
import Card from './Card'

export default function Cards() {
    const [cards, setCards] = useState([
        { id: 0, name: 'one', status: '', img: '/images/one.png' },
        { id: 0, name: 'one', status: '', img: '/images/one.png' },
        { id: 1, name: 'two', status: '', img: '/images/two.png' },
        { id: 1, name: 'two', status: '', img: '/images/two.png' },
        { id: 2, name: 'three', status: '', img: '/images/three.png' },
        { id: 2, name: 'three', status: '', img: '/images/three.png' },
        { id: 3, name: 'four', status: '', img: '/images/foor.png' },
        { id: 3, name: 'four', status: '', img: '/images/foor.png' },
        { id: 4, name: 'five', status: '', img: '/images/five.png' },
        { id: 4, name: 'five', status: '', img: '/images/five.png' },
        { id: 5, name: 'six', status: '', img: '/images/six.png' },
        { id: 5, name: 'six', status: '', img: '/images/six.png' },
        { id: 6, name: 'seven', status: '', img: '/images/seven.png' },
        { id: 6, name: 'seven', status: '', img: '/images/seven.png' },
        { id: 7, name: 'eight', status: '', img: '/images/eight.png' },
        { id: 7, name: 'eight', status: '', img: '/images/eight.png' },
        { id: 8, name: 'nine', status: '', img: '/images/nine.png' },
        { id: 8, name: 'nine', status: '', img: '/images/nine.png' },
        { id: 9, name: 'ten', status: '', img: '/images/ten.png' },
        { id: 9, name: 'ten', status: '', img: '/images/ten.png' },
        { id: 10, name: 'eleven', status: '', img: '/images/eleven.png' },
        { id: 10, name: 'eleven', status: '', img: '/images/eleven.png' },
        { id: 11, name: 'twelve', status: '', img: '/images/twelve.png' },
        { id: 11, name: 'twelve', status: '', img: '/images/twelve.png' },
        { id: 12, name: 'thirteen', status: '', img: '/images/thirteen.png' },
        { id: 12, name: 'thirteen', status: '', img: '/images/thirteen.png' },
        { id: 13, name: 'fourteen', status: '', img: '/images/foorteen.png' },
        { id: 13, name: 'fourteen', status: '', img: '/images/foorteen.png' },
        { id: 14, name: 'fifteen', status: '', img: '/images/fifteen.png' },
        { id: 14, name: 'fifteen', status: '', img: '/images/fifteen.png' },
        { id: 15, name: 'sixteen', status: '', img: '/images/sixteen.png' },
        { id: 15, name: 'sixteen', status: '', img: '/images/sixteen.png' },
        { id: 16, name: 'seventeen', status: '', img: '/images/seventeen.png' },
        { id: 16, name: 'seventeen', status: '', img: '/images/seventeen.png' },
        { id: 17, name: 'eighteen', status: '', img: '/images/eighteen.png' },
        { id: 17, name: 'eighteen', status: '', img: '/images/eighteen.png' },
    ].sort(() => Math.random() - .5))

    const [previousCardState, setPreviousCardState] = useState(-1)
    const previousIndex = useRef(-1)

    const matchCheck = (currentCard) => {
        if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviousCardState(-1)
        }else{
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(() => {
                setPreviousCardState(-1)
                cards[currentCard].status = 'unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            }, 1000);
        }
    }

    const clickhandler = (index) => {
        
        if(index !== previousIndex.current){
            if(cards[index].status === 'active matched'){
                alert('already matched')
            }else{
                if(previousCardState === -1){
                    previousIndex.current = index
                    cards[index].status = 'active'
                    setCards([...cards])
                    setPreviousCardState(index)
                }else{
                    matchCheck(index)
                    previousIndex.current = -1
                }
            }
        }else{
            alert('card currently seleted')
        }

    }

    return (
      <div className="container">
        { cards.map((card, index) => {
            return <Card key={index} card={card} index={index} clickhandler={clickhandler} />
        })}
      </div>
    );
}