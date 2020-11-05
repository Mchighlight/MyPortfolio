import axios from 'axios' ;
import PortfolioApi from '@/lib/api/portfolios' ;

export default async function createPortfolio(req, res){
    try{
        const data = req.body ;
        await new PortfolioApi().createPortfolio(data);
        return res.json({message: "Portfolio was created"}) ;
    } catch(e){
        console.log("SHIT")
        return res.status(e.status || 400).end(e.message) ;
    }
}