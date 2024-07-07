<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Controller_API extends Controller{

public function RichiediEsercizi(){
$id=Request('id');
$id=str_replace(' ', '%20', $id);
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "https://exercisedb.p.rapidapi.com/exercises/bodyPart/".$id."?limit=12");
$headers = [
"X-RapidAPI-Key: b078e96eebmshafbe89161a8b0edp1a528ajsn19634e072585",
"X-RapidAPI-Host: exercisedb.p.rapidapi.com"
];
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);
curl_close($curl);
$data = json_decode($result, true);
  return response()->json($data);
}



public function TraduciEsercizi(Request $request){
    $documento= $request->input('html');
           if (empty($documento)) {
        return response()->json(['error' => 'html should not be empty'], 400);
    }
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL,"https://google-translate113.p.rapidapi.com/api/v1/translator/html");
curl_setopt($curl, CURLOPT_POST, 1);
$headers = [
'content-type: application/x-www-form-urlencoded',
'X-RapidAPI-Key: b6fe24db04msh2dc1b95fb7f573fp17c0ffjsnf0259de79fd5',
'X-RapidAPI-Host: google-translate113.p.rapidapi.com'
];
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$dati = array("from" => "auto", "to" => "it", "html" => $documento);
$dati = http_build_query($dati);
curl_setopt($curl, CURLOPT_POSTFIELDS, $dati);
$result = curl_exec($curl);
curl_close($curl);
$data = json_decode($result, true);
return response()->json($data);



}

}

?>
