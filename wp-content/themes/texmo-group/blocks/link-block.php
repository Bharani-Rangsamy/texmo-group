<?php
/**
* The template used for displaying a link block.
*/
// $buttons = get_field('buttons');
?>

<section class="link-block">
<?php if( have_rows('buttons') ) { ?>
	<?php while( have_rows('buttons') ): the_row();
		$button = get_sub_field('button');
	?>
	<a class="link-block-item" href="<?php echo $button['link']['url']; ?>">
		<img loading="lazy" src="<?php echo $button['image']['url']; ?>" alt="<?php echo $button['image']['alt']; ?>" />
		<p class="lead"><?php echo $button['text']; ?>
		<br />
		<span>↳</span></p>
	</a>
	<?php endwhile; ?>
<?php } ?>
</section>