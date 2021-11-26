import React from 'react'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SellDisplayCard = () => {
    return (
        <>
        <div className="main">
        <div className="flex ">
            <div style={{ position: 'relative', width: '18vw', height: '30vh', borderRadius:"10px",overflow: 'hidden' }}>
            <Image src="/atomic-habits.jpeg" layout="fill" ></Image>
            </div>
          <div className="description"> 
          <div className="flex"> 
          <h4 className="book-title">The Atomic Habits</h4>
          <Button variant="contained" disableElevation style={{backgroundColor: '#C5DCFA', color: '#0F56B3', fontWeight: "800", cursor: "default" }} size="small">Self-growth</Button>
          </div> 
          <div className="flex p-1">
          <h4 className="title">Author:</h4>
          <p>  Binglong Lee</p>
          </div>
          <div className="flex">
          <h4 className="title">Condition: </h4>
          <div className="ratting">
          <Rating name="read-only" value={4} readOnly />
          </div>
          </div>
          <div className="flex p-1">
          <h4 className="title">Location: </h4>
          <p>Belghoria, Kolkata</p>
          </div>
          </div>
          <div style={{position: "relative" , right: "3%"}}>
          <div style={{position: "relative" , right: "3%", paddingTop: "1rem"}}>
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} style={{color:"red",float: "right"}} />   
          <div style={{position: "relative" ,top: "40%",paddingTop: "5.5rem"}}>
          <Button variant="contained" size="large" style={{ backgroundColor: "#0F56B3", borderRadius: "153px", fontSize: "1.5rem", cursor: "default" ,position: "relative" , float: "right"}} disableElevation >
          $180
        </Button>
        </div>
        </div>
          </div>
          </div>
          </div>

          <style jsx>
          {`
          p{
            line-height: 1.8rem;
            text-align: center;
            padding-left: 0.5rem;

          }
          .main{
              margin: 5rem;
              background-color: #F0EFEF;
              max-width: 60vw;
              border-radius: 10px;
          }
          .description{
            justify-content: center;
            margin-top: auto;
            margin-bottom: auto;
            padding-left: 2rem;
            min-width: 35vw
          }
          .book-title{
              font-weight: 700;
              padding-right: 1.5rem
          }
          .title{
            font-weight: 600;
            color: rgba(0,0,0, 0.8)
          }
          .ratting{
              padding-left: 0.5rem;

          }
          .p-1{
              padding: 0.5rem 0.5rem 0.5rem 0;
          }
          .image{
              position: relative
            height: 100px;
            width: 100px
            border-radius: 50%;
          }
          `}
          </style>

        </>
    )
}

export default SellDisplayCard
