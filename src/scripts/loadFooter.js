import hyperHTML from 'hyperhtml';
import dayjs from 'dayjs';

export default (props) =>
  hyperHTML.wire(props)`
  <p>
    ${props.content} - ${dayjs().format('YYYY')}
</p>`;
