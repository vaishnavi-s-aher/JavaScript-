function Displayfactors(ino)
{
    icnt = 0;
    console.log("factors of :",ino)
    
  for(icnt=1; icnt<=(ino/2);icnt++)
  {
    if(ino%icnt==0)
    {
        console.log(icnt)
    }
  }


}


function main()
{
     Displayfactors(12);
        
}
main ()

