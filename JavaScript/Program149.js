function Sumfactors(ino)
{
    
    icnt = 0;
    isum = 0;
   
    
     for(icnt=1; icnt<=(ino/2);icnt++)
  {
    if(ino%icnt==0)
    {
       isum = isum +icnt
    }
  }
     return isum

}


function main()
{
    iRet = 0
    iRet =  Sumfactors(12);

    console.log(iRet)
        
}
main ()

