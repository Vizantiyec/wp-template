<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<div class='site_article'>

			<?php if(!is_singular()) : // for not singular pages ?>
				<h2 class="site_article-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
				<div class="site_article-text text-justify">
					<?php the_excerpt(); ?>
				</div>

			<?php else : // for singular pages ?>

				<?php if (!is_page()) : // but not for page.php ?>
					<h1 class="site_article-title"><?php the_title(); ?></h1>
				<?php endif; ?>

				<div class="site_article-text text-justify">
					<?php the_content(); ?>
				</div>

				<div class="site_after-article-block text-center">
					<div class="site_btn-wrap">
						<a href="javascript:void(0);" onclick="document.location.href='/order'" class="btn btn-default site_big-btn">Order Now</a>
					</div>
				</div>
			<?php endif; ?>
		</div>
	<?php endwhile; ?>
<?php endif; ?>
