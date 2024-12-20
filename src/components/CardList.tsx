import CardElement from "./CardElement";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function CardList() {
   return (
      <div className="flex flex-wrap gap-14 justify-center">
         {arr.map((item, i) => (
            <CardElement
               key={i}
               id={i}
               teachersName="Tamara Karachevceva"
               subjectName="Math"
            />
         ))}
      </div>
   );
}

export default CardList;
