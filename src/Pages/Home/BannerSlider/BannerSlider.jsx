

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const BannerSlider = () => {
     return (
          <div className=' mb-20'>
               <AwesomeSlider
                    play={true}>

                    <div className=' relative' data-src="https://img.freepik.com/free-photo/audio-microphone-retro-style_93675-128274.jpg?w=1380&t=st=1687070097~exp=1687070697~hmac=a177955a34c70c5633a05fbc9d420ea597acc0903ed917a0778f0d5e6ef28a1e" >
                    </div>
                    <div data-src="https://img.freepik.com/free-photo/drums-cymbals-hi-hat-beautiful-recording-studio_169016-3801.jpg?w=1380&t=st=1687070148~exp=1687070748~hmac=220fda07128857867e97754a25ca9ac62789b36b413383a76edbb3fe24d4df41" ></div>
                    <div data-src="https://img.freepik.com/free-photo/high-angle-kids-singing-sunday-school_23-2149613759.jpg?size=626&ext=jpg&uid=R105814829&ga=GA1.2.294406936.1686068593&semt=ais" ></div>
                    <div data-src="https://img.freepik.com/premium-photo/bright-musical-background_476363-6644.jpg?w=1480" ></div>
               </AwesomeSlider>



          </div>
     );
};

export default BannerSlider;