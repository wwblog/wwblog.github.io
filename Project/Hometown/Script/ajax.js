

var installdir='/';           //系统安装目录，请正确填写。如安装在kesion目录下，请设为 installdir='/kesion/'
function LabelAjax()
{
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	} else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	} 
	throw new Error("XMLHttp object could be created.");
}
function getlabeltag(){
    var labelItem = document.getElementsByTagName("span"); 
    for(var i=0; i<labelitem.length; i++){ var obj="labelItem[i];" if (typeof(obj.id)!="undefined" &&(obj.id.substring(0,2)="="ks"||obj.id.substring(0,3)=="SQL"))" { (obj.id.substring(0,2)="="ks")" idarr="obj.id.split('_');" labelid="idarr[0].replace("ks","");" typeid="idarr[1];" classid="idarr[2];" infoid="idarr[3];" channelid="idarr[4];" try{ getlabelcontent("plus ajax.asp",obj,labelid,"label",typeid,channelid,classid,infoid) }catch(e){} } else (obj.id.substring(0,3)="="SQL")" p="obj.id.substring(obj.id.indexOf("ksr")+3);" parr="p.split('p');" (p! ) try{getlabelcontent("plus ajax.asp",obj,obj.id,"sql",0,channelid,classid,infoid); function getlabelcontent(posturl,obj,labelid,action,typeid,channelid,classid,infoid) ksxhr="new" labelajax(); senddata="?action=" +action+"&labelid="+escape(labelid)+" &labtype="+typeid+" &channelid=" +channelid+" &classid="+classid+" &infoid="+infoid+getUrlParam();
	ksxhr.open(" get",installdir+posturl+senddata,true); ksxhr.onreadystatechange="function(){" if(ksxhr.readystate="=1)" obj.innerhtml="<span align='center'><img src='" +installdir+"images loading.gif'>正在加载数据...";
				  }
				  else if(ksxhr.readyState==2 || ksxhr.readyState==3)
				  {
				   obj.innerHTML="<span align="center"><img src=""+installdir+"images/loading.gif">正在读取数据...</span>";
				   }
				  else if(ksxhr.readyState==4)
				  {
					  
					 if (ksxhr.status==200)
					 {var s=ksxhr.responseText;
					  obj.innerHTML=s;
					 }
				  }
				}
	ksxhr.send(null);  
  }
  catch(e)
  {}
}
//取url传的参数
function getUrlParam()
{
	var URLParams = new Object() ;
	var aParams = document.location.search.substr(1).split('&') ;//substr(n,m)截取字符从n到m,split('o')以o为标记,分割字符串为数组
	if(aParams!=''&&aParams!=null){
		var sum=new Array(aParams.length);//定义数组
		for (i=0 ; i < aParams.length ; i++) {
		sum[i]=new Array();
		var aParam = aParams[i].split('=') ;//以等号分割
		URLParams[aParam[0]] = aParam[1] ;
		sum[i][0]=aParam[0];
		sum[i][1]=aParam[1];
		}
		var p='';
		for(i=0;i</labelitem.length;>