import { CardListItemBox } from './styles';

const CardListItem = () => {
  return (
    <CardListItemBox>
      <img src="https://cdn.nohat.cc/thumb/f/720/3b55eddcfffa4e87897d.jpg" alt="" />
      <div className="content">
        <div className="name">Prepare for your first skateboard jump</div>
        <div className="maker">Jordan Wise</div>
        <div className="info">
          125.908 views
          <span></span>2 days ago
        </div>
      </div>
    </CardListItemBox>
  );
};

export default CardListItem;
