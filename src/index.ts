import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';

class Greeter {
  async getData() {
    const data = await tf.io.listModels();
    console.log('📗 index13 🚀 884412 data:', data);
    return data;
  }

  async getQnaRes() {
    console.time('test_timer');
    console.time('load');
    console.log('🛡️ index13 🚀 966673 ', 'entre');

    const model = await qna.load();
    console.timeEnd('load');

    const passage = `Nikola Tesla (/ˈtɛslə/;[2] Serbo-Croatian: [nǐkola têsla]; Serbian Cyrillic: Никола Тесла;[a] 10
        July 1856 – 7 January 1943) was a Serbian-American[4][5][6] inventor, electrical engineer, mechanical engineer,
        and futurist who is best known for his contributions to the design of the modern alternating current (AC)
        electricity supply system.[7] <br>
  
        Born and raised in the Austrian Empire, Tesla studied engineering and physics in the 1870s without receiving a
        degree, and gained practical experience in the early 1880s working in telephony and at Continental Edison in the
        new electric power industry. He emigrated in 1884 to the United States, where he would become a naturalized
        citizen. He worked for a short time at the Edison Machine Works in New York City before he struck out on his own.
        With the help of partners to finance and market his ideas, Tesla set up laboratories and companies in New York to
        develop a range of electrical and mechanical devices. His alternating current (AC) induction motor and related
        polyphase AC patents, licensed by Westinghouse Electric in 1888, earned him a considerable amount of money and
        became the cornerstone of the polyphase system which that company would eventually market.<br>
  
        Attempting to develop inventions he could patent and market, Tesla conducted a range of experiments with
        mechanical oscillators/generators, electrical discharge tubes, and early X-ray imaging. He also built a
        wireless-controlled boat, one of the first ever exhibited. Tesla became well known as an inventor and would
        demonstrate his achievements to celebrities and wealthy patrons at his lab, and was noted for his showmanship at
        public lectures. Throughout the 1890s, Tesla pursued his ideas for wireless lighting and worldwide wireless
        electric power distribution in his high-voltage, high-frequency power experiments in New York and Colorado
        Springs. In 1893, he made pronouncements on the possibility of wireless communication with his devices. Tesla
        tried to put these ideas to practical use in his unfinished Wardenclyffe Tower project, an intercontinental
        wireless communication and power transmitter, but ran out of funding before he could complete it.[8]<br>
  
        After Wardenclyffe, Tesla experimented with a series of inventions in the 1910s and 1920s with varying degrees of
        success. Having spent most of his money, Tesla lived in a series of New York hotels, leaving behind unpaid bills.
        He died in New York City in January 1943.[9] Tesla's work fell into relative obscurity following his death, until
        1960, when the General Conference on Weights and Measures named the SI unit of magnetic flux density the tesla in
        his honor.[10] There has been a resurgence in popular interest in Tesla since the 1990s.[11]`;
    const question = 'when Tesla studied?';

    console.log('🛡️ index46 🚀 645656 ', 'start');
    console.time('findAnswers');

    const answers = await model.findAnswers(question, passage);

    console.log('📗 index46 🚀 509029 answers:', answers);

    console.timeEnd('findAnswers');
    console.timeEnd('test_timer');

    // const start = Date.now();
    // const timeTaken = Date.now() - start;
    // console.log('Total time taken : ' + timeTaken + ' milliseconds');
  }
}
const greeter = new Greeter();

greeter.getQnaRes();
