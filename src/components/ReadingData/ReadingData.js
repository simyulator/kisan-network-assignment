import React from 'react';
import './ReadingData.css';

const ReadingData = (props) => {
  return (
    <div className='reading-data'>
      <div className='reading-data-big-heading'>Fruit</div>
      <div className='reading-data-heading'>
        In botany, a fruit is the seed-bearing structure in flowering plants
        (also known as angiosperms) formed from the ovary after flowering.Many
        common terms for seeds and fruit do not correspond to the botanical
        classifications. In culinary terminology, a fruit is usually any
        sweet-tasting plant part, especially a botanical fruit; a nut is any
        hard, oily, and shelled plant product; and a vegetable is any savory or
        less sweet plant product.
      </div>
      <div className='reading-data-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className='reading-data-para'>
        As the ovules develop into seeds, the ovary begins to ripen and the
        ovary wall, the pericarp, may become fleshy (as in berries or drupes),
        or form a hard outer covering (as in nuts). In some multiseeded fruits,
        the extent to which the flesh develops is
        <div className='inside-para'>
          <blockquote>
            Many common terms for seeds and fruit do not correspond to the
            botanical classifications. In culinary terminology, a fruit is
            usually any sweet-tasting plant part, especially a botanical fruit.
            <span
              style={{
                float: 'right',
                color: 'black',
                fontStyle: 'normal',
                padding: '5px',
              }}
            >
              - Michael Simons
            </span>
          </blockquote>
        </div>{' '}
        proportional to the number of fertilized ovules.[14] The pericarp is
        often differentiated into two or three distinct layers called the
        exocarp (outer layer, also called epicarp), mesocarp (middle layer), and
        endocarp (inner layer). In some fruits, especially simple fruits derived
        from an inferior ovary, other parts of the flower (such as the floral
        tube, including the petals, sepals, and stamens), fuse with the ovary
        and ripen with it. In other cases, the sepals, petals and/or stamens and
        style of the flower fall off. When such other floral parts are a
        significant part of the fruit, it is called an accessory fruit. Since
        other parts of the flower may contribute to the structure of the fruit,
        it is important to study flower structure to understand how a particular
        fruit forms.
      </div>
      <div className='reading-data-para'>
        Aggregate fruits form from single flowers that have multiple carpels
        which are not joined together, i.e. each pistil contains one carpel.
        Each pistil forms a fruitlet, and collectively the fruitlets are called
        an etaerio. Four types of aggregate fruits include etaerios of achenes,
        follicles, drupelets, and berries. Ranunculaceae species, including
        Clematis and Ranunculus have an etaerio of achenes, Calotropis has an
        etaerio of follicles, and Rubus species like raspberry, have an etaerio
        of drupelets. Annona have an etaerio of berries.
      </div>
    </div>
  );
};

export default ReadingData;
