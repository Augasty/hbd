import { NAME } from "../constants/name"

const Card = () => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY {NAME}!</h3>

        <h5 className="suggest">click the card bantu</h5>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <p>Bhaai,</p>
        <p>
          Happy birthday {NAME}!! Many many happy returns of the day. 
          Please treat dis.

          Augasty
        </p>
        <p className="flexing">Yep, I just flexed my technical skills.</p>
      </div>
    </div>
  )
}

export default Card
