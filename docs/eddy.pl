# Aplica pares (regex, texto novo) num arquivo, preservando CRLF.
# Uso: perl eddy.pl arquivo receita.txt
my ($arq, $receita) = @ARGV;
local $/ = undef;
open my $h, '<:raw', $arq or die "abrir $arq: $!";
my $s = <$h>; close $h;
my $crlf = ($s =~ /\r\n/) ? 1 : 0;
$s =~ s/\r\n/\n/g;

open my $r, '<:raw', $receita or die "abrir $receita: $!";
my $txt = <$r>; close $r;
$txt =~ s/\r\n/\n/g;

my @blocos = split /^<<REGEX\n/m, $txt;
shift @blocos;
my $n = 0;
for my $b (@blocos) {
  my ($pat, $rep) = split /^<<NOVO\n/m, $b, 2;
  $rep =~ s/^<<FIM\n.*$//ms;
  $rep =~ s/\n\z//;
  $pat =~ s/\n\z//;
  my $re = qr/$pat/s;
  die "padrao nao casou (bloco " . ($n+1) . "):\n$pat\n" unless $s =~ $re;
  $s =~ s/$re/$rep/;
  $n++;
}
$s =~ s/\n/\r\n/g if $crlf;
open my $o, '>:raw', $arq or die "gravar: $!";
print $o $s; close $o;
print "ok: $n bloco(s) em $arq\n";
