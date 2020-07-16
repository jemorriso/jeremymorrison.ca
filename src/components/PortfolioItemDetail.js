import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

function PortfolioItemDetail(props) {
  const { smallDeviceBreakpoint } = props;
  return (
    <section>
      <SectionHeader
        title="Test"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
        voluptates dolore maxime fugiat eveniet? Amet debitis veritatis
        accusantium quaerat deleniti placeat sed perferendis animi officia
        impedit dolorem beatae delectus quas doloribus voluptatum nihil facilis
        ad sunt, explicabo voluptatibus odio accusamus vel? Accusamus officia
        quaerat excepturi dicta pariatur numquam quis sint facere? A sequi, eum
        nostrum, quisquam sapiente nobis non iusto quae veniam nemo vero quia
        quasi deleniti asperiores quibusdam labore debitis impedit nulla itaque.
        Soluta consequatur asperiores totam aspernatur magnam repellendus
        distinctio consectetur modi unde optio, itaque, accusantium sint sit
        iusto, dolorem blanditiis tempora? Eum iusto unde quidem tempore non
        accusamus, aspernatur inventore nam? Atque autem iusto culpa. A iusto
        similique inventore aliquam at voluptatibus nihil quaerat fuga corporis
        corrupti tempora molestiae voluptates ratione doloribus expedita
        repudiandae, quas, quia ullam libero. Amet earum esse aut dolor sit
        porro aliquam animi perspiciatis fugit facilis, non rerum tempora dicta
        voluptatibus consequuntur odit tempore enim atque voluptates.
        Exercitationem obcaecati reiciendis sint architecto consequuntur a vitae
        sequi iste itaque nisi perferendis assumenda ad quo recusandae sed vel
        molestiae, et adipisci distinctio id blanditiis animi odit saepe? Quam,
        reprehenderit nam voluptatum ex nemo vel totam facilis quasi, dicta
        assumenda iure. Ipsa excepturi earum quis nam iure ad iste eveniet
        numquam, accusantium quisquam mollitia ab inventore magni error,
        expedita ex veniam aut quaerat. Officiis iure ipsam, quia enim repellat
        deserunt velit quidem assumenda natus animi fugiat blanditiis odio? Aut
        necessitatibus totam laudantium! Beatae, distinctio? Debitis atque,
        soluta blanditiis et architecto reprehenderit aperiam unde perspiciatis
        voluptatibus similique dicta illum facilis ea, vitae porro dolorem. Ad
        ea totam eos asperiores mollitia veritatis obcaecati qui hic eum laborum
        distinctio quam, libero inventore sapiente illum ut vitae laudantium
        quibusdam porro error rem sequi? Sapiente laudantium, nesciunt voluptas,
        soluta odit, hic iusto et incidunt necessitatibus sequi nobis. Cumque
        provident optio possimus distinctio nisi quasi, quia, enim harum ipsam
        cupiditate odit officia nobis ipsum omnis! Necessitatibus, commodi
        pariatur, dolore explicabo ad sed molestiae quod sunt voluptatibus
        dolores recusandae, laudantium placeat voluptatem dolorum mollitia
        ratione quos ipsam! Laborum blanditiis deserunt natus eligendi sunt esse
        accusamus quasi! Placeat, quam possimus ullam nobis molestias deleniti
        atque eveniet, adipisci aperiam quae aliquid hic! Nisi quis molestiae
        dolor iusto aperiam harum, fuga aut voluptatum minima blanditiis debitis
        illo assumenda impedit hic suscipit ducimus, facere nulla velit.
        Perspiciatis similique debitis saepe facilis itaque accusamus ut porro
        neque repudiandae delectus quisquam dicta non labore, officiis mollitia
        excepturi? Officia, at!
      </p>
    </section>
  );
}

PortfolioItemDetail.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default PortfolioItemDetail;
