import { LevelsType } from '../../types/types';

export const LEVELS: LevelsType = [
    {
        selector: 'plate',
        level1: 'level1HtmlFirst',
        level2: 'level1HtmlSecond',
        table1: 'level1FirstPlate',
        table2: 'level1SecondPlate',
        tableHtml: `
        <div class="table-wrapper">
            <div class="table-surface"></div>
            <div class="table">
                <plate class="data strobe move" id="level1FirstPlate" data-title="<plate></plate>"></plate>
                <plate class="data strobe move" id="level1SecondPlate" data-title="<plate></plate>"></plate>
            </div>
        </div>
        <div class="table-edge">
            <div class="table-leg"></div>
            <div class="table-leg"></div>
        </div>`,
        markup: `
            <div>&lt;div class="table"&gt;
                        <div class="move" id="level1HtmlFirst">&lt;plate /&gt;</div>
                        <div class="move" id="level1HtmlSecond">&lt;plate /&gt;</div>
                        &lt;/div&gt;
                    </div>`,
    },
    {
        selector: 'bento',
        level1: 'level2HtmlFirst',
        level2: 'level2HtmlSecond',
        level3: 'level2HtmlThird',
        table1: 'level2FirstPlate',
        table2: 'level2SecondPlate',
        table3: 'level2ThirdPlate',
        tableHtml: `
        <div class="table-wrapper" >
            <div class="table-surface"></div>
            <div class="table">
                <bento class="data strobe move" id="level2FirstPlate" data-title="<bento></bento>" ></bento>
                <plate class="data  move" id="level2SecondPlate" data-title="<plate></plate>" ></plate>
                <bento class="data strobe move" id="level2ThirdPlate" data-title="<bento></bento>" ></bento>
            </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
                <div class="move" id="level2HtmlFirst">&lt;bento /&gt;</div>
                <div class="move" id="level2HtmlSecond">&lt;plate /&gt;</div>
                <div class="move" id="level2HtmlThird">&lt;bento /&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'plate#fancy',
        level1: 'level3HtmlFirst',
        level2: 'level3HtmlSecond',
        level3: 'level3HtmlThird',
        table1: 'level3FirstPlate',
        table2: 'level3SecondPlate',
        table3: 'level3ThirdPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
            <plate id="level3FirstPlate" class="data strobe move" data-title="<plate></plate>" ></plate>
            <plate id="level3SecondPlate" class="data move" data-title="<plate></plate>" ></plate>
            <bento id="level3ThirdPlate" class="data move" data-title="<bento></bento>" ></bento>
          </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
                <div class="move" id="level3HtmlFirst">&lt;plate  id="fancy" /&gt;</div>
                <div class="move" id="level3HtmlSecond">&lt;plate /&gt;</div>
                <div class="move" id="level3HtmlThird">&lt;bento /&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'plate>apple',
        level1: 'level4HtmlFirst',
        level2: 'level4HtmlSecond',
        level3: 'level4HtmlThird',
        level4: 'level4HtmlFourth',
        table1: 'level4FirstPlate',
        table2: 'level4SecondPlate',
        table3: 'level4ThirdPlate',
        table4: 'level4FourthPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
            <bento id="level4FirstPlate" class="data move" data-title="<bento></bento>" ></bento>
            <plate id="level4SecondPlate" class="data move" data-title="<plate></plate>" >
                <apple class="data move strobe" data-title="<apple></apple>" id="level4ThirdPlate" ></apple>
            </plate>
            <apple id="level4FourthPlate" class="data move" data-title="<apple></apple>" ></apple>
          </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
                <div class="move" id="level4HtmlFirst">&lt;bento /&gt;</div>
                <div class="move" id="level4HtmlSecond">&lt;plate&gt;
                <div class="move" id="level4HtmlThird">&lt;apple /&gt;
                </div>&lt;/plate&gt;</div>
                <div class="move" id="level4HtmlFourth">&lt;apple /&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'plate#fancy>pickle',
        level1: 'level5HtmlFirst',
        level2: 'level5HtmlSecond',
        level3: 'level5HtmlThird',
        level4: 'level5HtmlFourth',
        level5: 'level5HtmlFifth',
        level6: 'level5HtmlSixth',
        table1: 'level5FirstPlate',
        table2: 'level5SecondPlate',
        table3: 'level5ThirdPlate',
        table4: 'level5FourthPlate',
        table5: 'level5FifthPlate',
        table6: 'level5SixthPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
            <bento id="level5FirstPlate" class="data move" data-title="<bento></bento>" >
                <orange id="level5SecondPlate" class="data move" data-title="<orange></orange>" ></orange>
            </bento>
            <plate id="level5ThirdPlate" class="data move" data-title="<bento></bento>" >
              <pickle id="level5FourthPlate" class="data move strobe" data-title="<pickle></pickle>" ></pickle>
            </plate>
            <plate id="level5FifthPlate" class="data move" data-title="<plate></plate>" >
              <pickle id="level5SixthPlate" class="data move" data-title="<pickle></pickle>" ></pickle>
            </plate>
            </div>
                </div>
                <div class="table-edge" >
                  <div class="table-leg"></div>
                  <div class="table-leg"></div>
                </div>`,
        markup: `<div>&lt;div class="table"&gt;
                    <div class="move" id="level5HtmlFirst">&lt;bento&gt;
                        <div class="move" id="level5HtmlSecond">&lt;orange /&gt;</div>
                    &lt;/bento&gt;</div>
                <div class="move" id="level5HtmlThird">&lt;plate  id="fancy"&gt;
                    <div class="move" id="level5HtmlFourth">&lt;pickle /&gt;</div>&lt;/plate&gt;</div>
                <div class="move" id="level5HtmlFifth">&lt;plate&gt;
                    <div class="move" id="level5HtmlSixth">&lt;pickle /&gt;</div>
                &lt;/plate&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'apple.small',
        level1: 'level6HtmlFirst',
        level2: 'level6HtmlSecond',
        level3: 'level6HtmlThird',
        level4: 'level6HtmlFourth',
        level5: 'level6HtmlFifth',
        table1: 'level6FirstPlate',
        table2: 'level6SecondPlate',
        table3: 'level6ThirdPlate',
        table4: 'level6FourthPlate',
        table5: 'level6FifthPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
    <apple class="data move" id="level6FirstPlate" data-title="<apple></apple>" ></apple>
    <apple class="small strobe data move" id="level6SecondPlate" data-title="<apple></apple>" ></apple>
    <plate class="data move" id="level6ThirdPlate" data-title="<plate></plate>" >
      <apple class="small strobe data move" id="level6FourthPlate" data-title="<apple></apple>" ></apple>
    </plate>
    <plate class="data move" id="level6FifthPlate" data-title="<plate></plate>" ></plate>
    </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
                    <div class="move" id="level6HtmlFirst">&lt;apple /&gt;</div>
                    <div class="move" id="level6HtmlSecond">&lt;apple  class="small" /&gt;</div>
                    <div class="move" id="level6HtmlThird">&lt;plate&gt;
                        <div class="move" id="level6HtmlFourth">&lt;apple  class="small" /&gt;</div>&lt;/plate&gt;</div>
                    <div class="move" id="level6HtmlFifth">&lt;plate /&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'orange.small',
        level1: 'level7HtmlFirst',
        level2: 'level7HtmlSecond',
        level3: 'level7HtmlThird',
        level4: 'level7HtmlFourth',
        level5: 'level7HtmlFifth',
        level6: 'level7HtmlSixth',
        level7: 'level7HtmlSeventh',
        level8: 'level7HtmlEight',
        table1: 'level7FirstPlate',
        table2: 'level7SecondPlate',
        table3: 'level7ThirdPlate',
        table4: 'level7FourthPlate',
        table5: 'level7FifthPlate',
        table6: 'level7SixthPlate',
        table7: 'level7SeventhPlate',
        table8: 'level7EightPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
    <apple class="data move" data-title="<apple></apple>" id="level7FirstPlate" ></apple>
    <apple class="small data move" data-title="<apple></apple>" id="level7SecondPlate" ></apple>
    <bento class=" data move" data-title="<bento></bento>" id="level7ThirdPlate" >
      <orange class="small strobe data move" data-title="<orange></orange>" id="level7FourthPlate" ></orange>
    </bento>
    <plate class="data move" data-title="<plate></plate>" id="level7FifthPlate" >
      <orange class="data move" data-title="<orange></orange>" id="level7SixthPlate" ></orange>
    </plate>
    <plate class="data move" data-title="<plate></plate>" id="level7SeventhPlate" >
      <orange class="small strobe data move" data-title="<orange></orange>" id="level7EightPlate" ></orange>
    </plate></div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
<div class="move" id="level7HtmlFirst">&lt;apple /&gt;</div>
<div class="move" id="level7HtmlSecond">&lt;apple  class="small" /&gt;</div>
<div class="move" id="level7HtmlThird">&lt;bento&gt;
<div class="move" id="level7HtmlFourth">&lt;orange  class="small" /&gt;</div>&lt;/bento&gt;</div>
<div class="move" id="level7HtmlFifth">&lt;plate&gt;
<div class="move" id="level7HtmlSixth">&lt;orange /&gt;</div>&lt;/plate&gt;</div>
<div class="move" id="level7HtmlSeventh">&lt;plate&gt;
<div class="move" id="level7HtmlEight">&lt;orange  class="small" /&gt;</div>&lt;/plate&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'bento>orange.small',
        level1: 'level8HtmlFirst',
        level2: 'level8HtmlSecond',
        level3: 'level8HtmlThird',
        level4: 'level8HtmlFourth',
        level5: 'level8HtmlFifth',
        level6: 'level8HtmlSixth',
        level7: 'level8HtmlSeventh',
        level8: 'level8HtmlEight',
        level9: 'level8HtmlNinth',
        table1: 'level8FirstPlate',
        table2: 'level8SecondPlate',
        table3: 'level8ThirdPlate',
        table4: 'level8FourthPlate',
        table5: 'level8FifthPlate',
        table6: 'level8SixthPlate',
        table7: 'level8SeventhPlate',
        table8: 'level8EightPlate',
        table9: 'level8NinthPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
    <bento class="data move" id="level8FirstPlate" data-title="<bento></bento>" >
      <orange class="data move" id="level8SecondPlate" data-title="<orange></orange>" ></orange>
    </bento>
    <orange class="small data move" id="level8ThirdPlate" data-title="<orange></orange>" ></orange>
    <bento class="data move" id="level8FourthPlate" data-title="<bento></bento>" >
      <orange class="small strobe data move" id="level8FifthPlate" data-title="<orange></orange>" ></orange>
    </bento>
    <bento class="data move" id="level8SixthPlate" data-title="<bento></bento>" >
      <apple class="small data move" id="level8SeventhPlate" data-title="<apple></apple>" ></apple>
    </bento>
    <bento class="data move" id="level8EightPlate" data-title="<bento></bento>" >
      <orange class="small strobe data move" id="level8NinthPlate" data-title="<orange></orange>" ></orange>
    </bento>
    </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
<div class="move" id="level8HtmlFirst">&lt;bento&gt;
<div class="move" id="level8HtmlSecond">&lt;orange /&gt;</div>&lt;/bento&gt;</div>
<div class="move" id="level8HtmlThird">&lt;orange  class="small" /&gt;</div>
<div class="move" id="level8HtmlFourth">&lt;bento&gt;
<div class="move" id="level8HtmlFifth">&lt;orange  class="small" /&gt;</div>&lt;/bento&gt;</div>
<div class="move" id="level8HtmlSixth">&lt;bento&gt;
<div class="move" id="level8HtmlSeventh">&lt;apple  class="small" /&gt;</div>&lt;/bento&gt;</div>
<div class="move" id="level8HtmlEight">&lt;bento&gt;
<div class="move" id="level8HtmlNinth">&lt;orange  class="small" /&gt;</div>&lt;/bento&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: 'plate,bento',
        level1: 'level9HtmlFirst',
        level2: 'level9HtmlSecond',
        level3: 'level9HtmlThird',
        level4: 'level9HtmlFourth',
        level5: 'level9HtmlFifth',
        level6: 'level9HtmlSixth',
        level7: 'level9HtmlSeventh',
        level8: 'level9HtmlEight',
        level9: 'level9HtmlNinth',
        level10: 'level9HtmlTenth',
        table1: 'level9FirstPlate',
        table2: 'level9SecondPlate',
        table3: 'level9ThirdPlate',
        table4: 'level9FourthPlate',
        table5: 'level9FifthPlate',
        table6: 'level9SixthPlate',
        table7: 'level9SeventhPlate',
        table8: 'level9EightPlate',
        table9: 'level9NinthPlate',
        table10: 'level9TenthPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
    <pickle class="small data move" id="level9FirstPlate" data-title="<pickle></pickle>" ></pickle>
    <pickle class="data move" id="level9SecondPlate" data-title="<pickle></pickle>" ></pickle>
    <plate class="strobe data move" id="level9ThirdPlate" data-title="<plate></plate>" >
      <pickle class="data move" id="level9FourthPlate" data-title="<pickle></pickle>" ></pickle>
    </plate>
    <bento class="strobe data move" id="level9FifthPlate" data-title="<bento></bento>" >
      <pickle class="data move" id="level9SixthPlate" data-title="<pickle></pickle>" ></pickle>
    </bento>
    <plate class="strobe data move" id="level9SeventhPlate" data-title="<plate></plate>" >
      <pickle class="data move" id="level9EightPlate" data-title="<pickle></pickle>" ></pickle>
    </plate>
    <pickle class="data move" id="level9NinthPlate" data-title="<pickle></pickle>" ></pickle>
    <pickle class="small data move" id="level9TenthPlate" data-title="<pickle></pickle>" ></pickle>
    </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
<div class="move" id="level9HtmlFirst">&lt;pickle  class="small" /&gt;</div>
<div class="move" id="level9HtmlSecond">&lt;pickle /&gt;</div>
<div class="move" id="level9HtmlThird">&lt;plate&gt;
<div class="move" id="level9HtmlFourth">&lt;pickle /&gt;</div>&lt;/plate&gt;</div>
<div class="move" id="level9HtmlFifth">&lt;bento&gt;
<div class="move" id="level9HtmlSixth">&lt;pickle /&gt;</div>&lt;/bento&gt;</div>
<div class="move" id="level9HtmlSeventh">&lt;plate&gt;
<div class="move" id="level9HtmlEight">&lt;pickle /&gt;</div>&lt;/plate&gt;</div>
<div class="move" id="level9HtmlNinth">&lt;pickle /&gt;</div>
<div class="move" id="level9HtmlTenth">&lt;pickle  class="small" /&gt;</div>&lt;/div&gt;</div>`,
    },
    {
        selector: '*',
        level1: 'level10HtmlFirst',
        level2: 'level10HtmlSecond',
        level3: 'level10HtmlThird',
        level4: 'level10HtmlFourth',
        level5: 'level10HtmlFifth',
        level6: 'level10HtmlSixth',
        level7: 'level10HtmlSeventh',
        table1: 'level10FirstPlate',
        table2: 'level10SecondPlate',
        table3: 'level10ThirdPlate',
        table4: 'level10FourthPlate',
        table5: 'level10FifthPlate',
        table6: 'level10SixthPlate',
        table7: 'level10SeventhPlate',
        tableHtml: `
        <div class="table-wrapper" >
          <div class="table-surface"></div>
          <div class="table">
    <apple class="strobe data move" id="level10FirstPlate" data-title="<apple></apple>" ></apple>
    <plate class="strobe data move" id="level10SecondPlate" data-title="<plate></plate>" >
      <orange class="small strobe data move" id="level10ThirdPlate" data-title="orange-small"width: 30px;"></orange>
    </plate>
    <bento class="strobe data move" id="level10FourthPlate" data-title="<bento></bento>" ></bento>
    <bento class="strobe data move" id="level10FifthPlate" data-title="<bento></bento>" >
      <orange class="strobe data move" id="level10SixthPlate" data-title="<orange></orange>" ></orange>
    </bento>
    <plate id="level10SeventhPlate" class="strobe data move" id="" data-title="<plate></plate>" ></plate>
    </div>
        </div>
        <div class="table-edge" >
          <div class="table-leg"></div>
          <div class="table-leg"></div>
        </div>`,
        markup: `<div>&lt;div class="table"&gt;
<div class="move" id="level10HtmlFirst">&lt;apple /&gt;</div>
<div class="move" id="level10HtmlSecond">&lt;plate&gt;
<div class="move" id="level10HtmlThird">&lt;orange  class="small" /&gt;</div>&lt;/plate&gt;</div>
<div class="move" id="level10HtmlFourth">&lt;bento /&gt;</div>
<div class="move" id="level10HtmlFifth">&lt;bento&gt;
<div class="move" id="level10HtmlSixth">&lt;orange /&gt;</div>&lt;/bento&gt;</div>
<div class="move" id="level10HtmlSeventh">&lt;plate  id="fancy" /&gt;</div>&lt;/div&gt;</div>`,
    },
];
