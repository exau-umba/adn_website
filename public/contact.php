<?php
// Reception du formulaire de contact du site et envoi vers la boite de l'entreprise.
header('Content-Type: application/json; charset=utf-8');

const DESTINATAIRE = 'contact@adnproservice.com';
const EXPEDITEUR = 'no-reply@adnproservice.com';

function repondre($code, $message)
{
    http_response_code($code);
    echo json_encode(['ok' => $code === 200, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    repondre(405, 'Methode non autorisee.');
}

$donnees = json_decode(file_get_contents('php://input'), true);
if (!is_array($donnees)) {
    $donnees = $_POST;
}

// Champ piege anti-spam : rempli uniquement par les robots
if (!empty($donnees['site'])) {
    repondre(200, 'Message envoye.');
}

$nom = trim(str_replace(["\r", "\n"], ' ', (string) ($donnees['nom'] ?? '')));
$email = trim((string) ($donnees['email'] ?? ''));
$message = trim((string) ($donnees['message'] ?? ''));

if ($nom === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    repondre(400, 'Merci de renseigner votre nom, un email valide et votre message.');
}

if (mb_strlen($nom) > 150 || mb_strlen($message) > 5000) {
    repondre(400, 'Votre message est trop long.');
}

$sujet = '=?UTF-8?B?' . base64_encode('Nouvelle demande de contact - ' . $nom) . '?=';
$corps = "Nouvelle demande recue depuis le site ADN Pro Service\n\n"
    . "Nom : $nom\n"
    . "Email : $email\n\n"
    . "Message :\n$message\n";

$entetes = [
    'From: ADN Pro Service <' . EXPEDITEUR . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

if (!mail(DESTINATAIRE, $sujet, $corps, implode("\r\n", $entetes))) {
    repondre(500, "L'envoi a echoue. Merci de reessayer ou de nous ecrire directement.");
}

repondre(200, 'Message envoye.');
