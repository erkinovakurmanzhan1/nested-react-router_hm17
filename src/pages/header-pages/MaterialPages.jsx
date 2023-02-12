// import { Link } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const MaterialPages = ({ materials }) => {
  const [params, setParams] = useSearchParams();

  const openModalHandler = () => {
    params.set("modal", "addNewMaterial");
    setParams(params);
  };

  const closeModalHandler = () => {
    params.delete("modal");
    setParams(params);
  };
  return (
    <div>
      <ul>
        <BtnBox>
          {params.has("modal") ? (
            <Modal>
              <TitleModal>Add new material modal </TitleModal>
              <TitleModalText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, beatae. Saepe asperiores quisquam id quod. Sequi
                corporis similique, aut ducimus, nobis amet vitae explicabo qui
                mollitia, odio pariatur vel nostrum? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Suscipit veritatis sunt doloribus
                eius quidem minus sint harum magnam eos dignissimos. Nulla
                ducimus maxime officiis rerum error corrupti adipisci illo
                harum!
              </TitleModalText>

              <BtnContainer>
                <Button onClick={closeModalHandler}>close modal</Button>
              </BtnContainer>
            </Modal>
          ) : null}
          <div>
            <Button color="orange" onClick={openModalHandler}>
              Add new material
            </Button>
          </div>
        </BtnBox>
        {materials.map((item) => {
          return (
            <LinkStyle to={`${item.id}/details/`}>
              <Box>
                <Title key={item.id}>{item.title}</Title>
                <ButtonContainer>
                  <Button>details</Button>
                </ButtonContainer>
              </Box>
            </LinkStyle>
          );
        })}
      </ul>
    </div>
  );
};

export default MaterialPages;

const BtnBox = styled.div`
  margin: 8rem 0 0 49rem;
`;
const BtnContainer = styled.div`
  margin-left: 27rem;
`;

const Box = styled.div`
  width: 600px;
  height: 100px;
  background-color: white;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  margin: 1rem 0 2rem 26rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  color: #0e0ea9;
  padding: 2rem 0 0 2rem;
`;
const ButtonContainer = styled.div`
  margin: 1.5rem 1rem 0 0;
`;
const TitleModal = styled.p`
  font-size: 30px;
  margin: 2rem 0 0 4rem;
`;
const TitleModalText = styled.p`
  font-size: 16px;
  margin: 1rem 0 2.5rem 1rem;
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
`;
