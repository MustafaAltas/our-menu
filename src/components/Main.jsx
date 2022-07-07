import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  font-family: "Roboto", sans-serif;
  width: 90vw;
  padding: 2rem;
  margin: 2rem auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(569px, 1fr));
  .card {
    padding: 20px;
    margin: 20px;
    font-size: 25px;
    background-color: azure;
  }
`;

const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.5rem;

  .card-img {
    border: 5px solid #c59d5f;
    width: 235px;
    height: 160px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .card-content-1 {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dotted black;
    p {
      color: #c59d5f;
    }
  }
  .card-content-2 {
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    font-size: 14px;
    font-weight: 200;
  }
`;
function Main({ data ,filtered}) {
  return (
    <MainDiv>
        {
            (filtered.length === 0) ? (
                data?.map((item) => {
                    return (
                      <CardDiv className="card" key={item.id}>
                        <div className="card-img">
                          <img
                            src={item.image}
                            alt=""
                            width="225px"
                            height="150px"
                          />
                        </div>
            
                        <div className="card-content">
                          <div className="card-content-1">
                            <h5>{item.name}</h5>
                            <p>{item.price}</p>
                          </div>
                          <div className="card-content-2">
                            {item.desc}
                          </div>
                        </div>
                      </CardDiv>
                    );
                  })
            ) : (
                filtered?.map((item) => {
                    return (
                      <CardDiv className="card" key={item.id}>
                        <div className="card-img">
                          <img
                            src={item.image}
                            alt=""
                            width="225px"
                            height="150px"
                          />
                        </div>
            
                        <div className="card-content">
                          <div className="card-content-1">
                            <h5>{item.name}</h5>
                            <p>{item.price}</p>
                          </div>
                          <div className="card-content-2">
                            {item.desc}
                          </div>
                        </div>
                      </CardDiv>
                    );
                  })
            )
        }

      
    </MainDiv>
  );
}

export default Main;
