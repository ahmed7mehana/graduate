import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds ,show}) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
        <div className="title"><h1>    
        تخرج الدفعه 27 (كليه الزراعه جامعه طنطا)
        </h1></div>
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
            </div>
{show?(
  <div className="talk">
<p>  
لقد انتهت رحلتنا التعليميه هنا الي الابد وبداء
الان فصل جديد من حياتنا مع تحديات جديده بقد مررنا 
في بهذه الفتره معنا وكونا صداقات سوف تدوم الي الابد  اعلم انه كانت هناك صدقات ليست جيده ولكن يا صديقي/ي 
لقد استمتعنا وتعلممنا الكثير من كل هذه التجارب الجميله  الحلو منها والمر
وصياحنا علي جروب الدفعه دائما قبل الامتحان وان غالبا من يصيح هما الناس البتجيب امتياز
مش هننسا ديما الامتحانات الصعبه و  وتعاونا في البنوك وحتي نشاط المزرعه  
ومساعده بعضنا في سؤال او بنوك  وغيروه  وتعاون الدكتره معانا وبعض تصرفات صحابنا المفيهاش اي منطق
وصحبك البيشلك عبل  مينزلك عشان تروحو الكليه والصحاب البتروح الكليه عشانهم 
وقعدتنا بالساعات بنستني السكشن و هزرنا مع بعض كلنا 
فحاول تفتكر الحلو بس من الفتره دي
وسامح اي حد عملك وحش او مكنش سالك سامح لنفسك انت وافتكر الحلو

مهما كان في المستقبل لو احتجت حد كلنا هنبقي موجودين وطبعا الهيقدر يساعد هيساعدك
في الاخر والاول المساعده بتبقي لنفسك بتفيدك قبل مبتفيد البتساعده 


واتمني لكم من كل قلبي التوفيق في حياتكم 
وان تحققو كل ما في اذهانكم ونتقابل يوما ما ونحن محققين كل احلامنا 
لا تياس في الحياه يا صديقي/ي واستمر بالعمل دائما علي تحقيق احلامك   

</p>
  </div>
):""}
            
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 0,
  timerHours: 0,
  timerMinutes: 0,
  timerSeconds: 0,
};

export default Clock;